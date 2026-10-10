export const socialPlatforms = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "youtube", label: "YouTube" },
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
] as const;

export type SocialKey = (typeof socialPlatforms)[number]["key"];
export type SocialLabel = (typeof socialPlatforms)[number]["label"];

export type PhoneNumber = {
  display: string;
  tel: string;
};

export type SocialLinks = Record<SocialKey, string | null>;

export type SiteSettings = {
  phones: PhoneNumber[];
  whatsapp: PhoneNumber[];
  addressLines: string[];
  social: SocialLinks;
};

export type SettingsInput = {
  phones: string[];
  whatsapp: string[];
  address: string;
  social: Record<SocialKey, string>;
};
