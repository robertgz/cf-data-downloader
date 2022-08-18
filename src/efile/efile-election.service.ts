import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { EfileElectionResults } from './efile-models';

@Injectable()
export class EfileElectionService {
  constructor(private httpService: HttpService) {}

  private apiPath = `api/v1/public`;
  private urlPath = `campaign-search/election/list`;

  async runDownloadElections(urlPrefix: string) {
    const url = `${urlPrefix}/${this.apiPath}/${this.urlPath}`;
    try {
      return await this.downloadElections(url);
    } catch {
      console.log('Error downloading eFile Elections');
    }
  }

  private async downloadElections(url: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get<AxiosResponse<EfileElectionResults[]>>(url),
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
}
