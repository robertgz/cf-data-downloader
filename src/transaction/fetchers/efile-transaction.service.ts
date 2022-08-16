import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  catchError,
  firstValueFrom,
  map,
  mergeMap,
  Observable,
  of,
} from 'rxjs';

@Injectable()
export class EFileGetWorkbookService {
  constructor(private httpService: HttpService) {}

  private defaultUrlPrefix = `https://efile.sandiego.gov/api/v1/public`;
  private urlPath = `campaign-bulk-export-url`;

  public async getFileBuffer(year, url): Promise<ArrayBuffer> {
    return await firstValueFrom(this.getFile(year, url));
  }

  private getFile(
    year: string,
    urlPrefix: string = this.defaultUrlPrefix,
  ): Observable<ArrayBuffer> {
    const mostRecent = false;
    const requestUrl = `${urlPrefix}/${this.urlPath}?year=${year}&most_recent_only=${mostRecent}`;

    return of(requestUrl).pipe(
      mergeMap((url) => this.getDownloadURL(url)),
      mergeMap((url) => this.downloadXLSXArrayBuffer(url)),
      // mergeMap((data) => this.convertToUint8Array(data)),
    );
  }

  private getDownloadURL(requestUrl: string): Observable<string> {
    return this.httpService.get(requestUrl).pipe(
      map((axiosResponse) => axiosResponse.data),
      map((eFileResponse) => eFileResponse.data),
      catchError((error) => {
        console.log({
          level: 'error',
          message: 'Not able to get URL of XLSX file from eFile.',
          // transactionYear: year,
          url: requestUrl,
        });

        throw error;
      }),
    );
  }

  private downloadXLSXArrayBuffer(requestUrl: string): Observable<ArrayBuffer> {
    return of(requestUrl).pipe(
      mergeMap((url) => {
        return this.httpService.get(url, {
          responseType: 'arraybuffer',
          headers: {
            Accept: 'application/xlsx',
          },
        });
      }),
      catchError((error) => {
        console.log({
          level: 'error',
          message: 'Not able to download XLSX file.',
          url: requestUrl,
        });
        throw error;
      }),
      map((response) => response.data),
    );
  }
}
