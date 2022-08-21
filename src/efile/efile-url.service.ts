import { Injectable } from '@nestjs/common';

@Injectable()
export class EfileUrlService {
  public async isValidUrl(url: string): Promise<boolean> {
    if (url.includes('/efile.')) return true;

    return false;
  }

  // Sample input: https://efile.sandiego.gov/public/search/campaign?query_string=...
  // Sample output: https://efile.sandiego.gov
  public async getBaseUrl(url: string): Promise<string> {
    if (!url) return '';

    const searchTerm = '/public/';
    const index = url.indexOf(searchTerm);

    const baseUrl = url.slice(0, index);

    return baseUrl;
  }
}
