export const VersionsAPI = {
  getVersions: function (): NodeJS.ProcessVersions {
    return process.versions;
  },
};
