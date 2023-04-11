import { defineStore } from 'pinia';
import { PartVersion, PartMaster } from '../models/PartVersion';

interface PartVersionContainer {
  content: PartVersion
}

export const PartVersionStore = defineStore('partVersion', {
  state: (): PartVersionContainer => ({
    content: {
      id: 0,
      iteration: 0,
      revision: 0,
      checkout: false,
      master: {} as PartMaster,
      customValues: {} as Record<string, string>,
      createUser: '',
      createDate: new Date(),
      updateUser: '',
      updateDate: new Date(),
      remarks: '',
    },
  }),
  actions: {
    setPartVersion(partVersion: PartVersion): void {
      this.content = partVersion;
    },
  },
});