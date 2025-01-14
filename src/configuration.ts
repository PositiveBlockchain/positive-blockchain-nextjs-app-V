class Configuration {
  getEnv(key: string) {
    const keysEnvVar = process.env[key];

    if (!keysEnvVar) {
      throw new Error(`The $${key} environment variable was not found!`);
    }

    return keysEnvVar;
  }

  constants = {
    google: {
      sheets: {
        apiSheet: {
          SPREADSHEET_ID: "1bxGiGdXQwj4Fw0LWBUqsseihZl63_mmuy60-xZafO2Y",
          SPREADSHEET_NAME: "API Keys",
          sheets: {
            apiKeys: {
              name: "Keys",
            },
          },
        },
        databaseSheet: {
          SPREADSHEET_ID: "1-Imie1YgTv4cRGmDTSQWoFgDxiUqmgFfnDLEfFcbCGg",
          // SPREADSHEET_ID: "1r8Nts5qtXau_-17mF1PE6HvyFrs8in98_1VVKg8QLAs",
          SPREADSHEET_NAME: "Template CSV DB",
          // SPREADSHEET_NAME: "Positive Blockchain Core Database (Working Copy)",
          sheets: {
            mainDatabase: {
              // name: "MAIN DATABASE",
              // name: "Copy of CSV Template",
              name: "CSV Template v2",
              headerRow: 6,
              keyRow: 2,
            },
            pendingProjects: {
              name: "Projects Pending Review",
            },
          },
        },
      },
      forms: {
        api_request_key: {
          id: "1FAIpQLSfnm4IR-AkEFvfRl5YixhQMk2FbA-463cosJYmE4mb6Cr-iuQ",
        },
      },
    },
    positiveBlockchain: {
      HOST: "https://positiveblockchain.io",
    },
    projects: {
      // How many projects to load initially
      INITIAL_DATA_LOAD_COUNT: 16,
      /** How long to cache in seconds */
      CACHE_TTL: 60 * 1,
    },
    /**
     * These are the functions that run out of the api folder
     * and are deployed as serverless functions on Vercel
     * https://vercel.com/docs/concepts/functions/serverless-functions
     *
     */
    serverlessFunctions: {
      /** How long to cache in seconds */
      CACHE_TTL: 60 * 5,
    },
    /**
     * This is for the serverless functions, which could need cold start
     */
    warmableEndpoints: [
      "https://positiveblockchain.io/database",
      "https://positiveblockchain.io/database/modum",
      "https://positiveblockchain.io/database/api/project-data",
    ],
    breakpoints: {
      sm: "640px",
      md: "768px",
    },
  };
}

export const config = new Configuration();
