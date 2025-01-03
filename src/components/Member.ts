export interface Member {
    id: number;
    profilePicture?: string;
    relationship: string;
    biological: boolean;
    firstName: string;
    middleName?: string;
    surname: string;
    nickname?: string;
    displayNickname: boolean;
    status: 'Living' | 'Deceased';
    birthDate: string;
    birthPlace?: string;
    currentPlace?: string;
  }