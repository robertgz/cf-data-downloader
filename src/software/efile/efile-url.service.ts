import { Injectable } from '@nestjs/common';

@Injectable()
export class EfileUrlService {
  public isValidUrl(url: string): boolean {
    if (typeof url !== 'string') return false;

    if (!url.includes('/efile.')) return false;

    if (!url.includes('/public/')) return false;

    if (url.indexOf('/public/') > 30) return false;

    return true;
  }

  // Sample input: https://efile.sandiego.gov/public/search/campaign?query_string=...
  // Sample output: https://efile.sandiego.gov
  public async getBaseUrl(url: string): Promise<string> {
    if (!this.isValidUrl(url)) return '';

    const searchTerm = '/public/';
    const index = url.indexOf(searchTerm);

    if (index > 0) {
      return url.slice(0, index);
    }

    return '';
  }
}
