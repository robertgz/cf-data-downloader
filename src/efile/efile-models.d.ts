export interface EfileOfficeResults {
  [key: string]: [EfileCandidateResults];
}

export interface EfileCandidateResults {
  full_office_name: string;

  agency: string;
  candidate_name: string;
  coe_id: string;
  district: string;
  election_id: string;
  filer_id: string;
  first_name: string;
  jurisdiction_code: string;
  jurisdiction_id: string;
  jurisdiction_name: string;
  jurisdiction_type: string;
  last_name: string;
  middle_name: string;
  office: string;
  office_code: string;
  office_id: string;
  suffix: string;
  title: string;
}

export interface EfileElectionResults {
  election_date: string;
  election_id: string;
  election_type: string;
  internal: boolean;
}
