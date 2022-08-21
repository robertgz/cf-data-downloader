import { Injectable } from '@nestjs/common';
import { EfileUrlService } from './efile-url.service';

@Injectable()
export class EfileAgencyService {
  constructor(private efileUrlService: EfileUrlService) {}

  /**
   * When a second eFile site is found this function should be
   * revised to scrape the site to obtain the pageTitle.
   */
  async getAgencyName(url: string): Promise<string> {
    let pageTitle;

    if (!this.efileUrlService.isValidUrl(url)) return '';

    if (url.includes('efile.sandiego.gov')) {
      pageTitle = 'City of San Diego Electronic Filing System';
    }

    if (!pageTitle) return '';

    const searchTerm = 'Electronic Filing System';
    const index = pageTitle.indexOf(searchTerm);

    const agencyName = pageTitle.slice(0, index).trim();

    return agencyName;
  }
}
