this project will have two processes
1. graphql web server
2. worker process

To fetch data a client will make a graphql request and poll for the results.
This graphql web server will start working on fetching/scrapping the data. (this could take several minutes) After the data is fetched it will be stored on the server and the polling should return the result. The data would expire after a set time an could be deleted after returned.

		
EFILE - source
	SD - agency
NETFILE
	CV - agency
	others
CampaignDocs - source
	SD County - agency
		Alpine Fire Protection - jurisdiction
	Davis City - agency

Should mayors have a district of 'mayor' 
