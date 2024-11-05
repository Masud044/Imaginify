
/* eslint-disable no-unused-vars */

// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

/// Type representing image configuration properties
declare type ImageConfig = {
  quality?: number;
  format?: 'jpg' | 'png' | 'webp' | 'gif';
  crop?: 'fit' | 'fill' | 'scale' | 'thumb' | 'crop';
  gravity?: 'center' | 'north' | 'south' | 'east' | 'west';
  transformationOptions?: {
    brightness?: number;
    contrast?: number;
    saturation?: number;
  };
  [key: string]: string | number | boolean | ImageConfig['transformationOptions'];
};


// Type for adding a new image
declare type AddImageParams = {
  image: {
    title: string;
    publicId: string;
    transformationType: string;
    width: number;
    height: number;
    config: ImageConfig;
    secureURL: string;
    transformationURL: string;
    aspectRatio?: string;
    prompt?: string;
    color?: string;
  };
  userId: string;
  path: string;
};

// Type for updating an existing image
declare type UpdateImageParams = {
  image: {
    _id: string;
    title: string;
    publicId: string;
    transformationType: string;
    width: number;
    height: number;
    config: ImageConfig;
    secureURL: string;
    transformationURL: string;
    aspectRatio?: string;
    prompt?: string;
    color?: string;
  };
  userId: string;
  path: string;
};

// Types for transformations that can be applied to images
declare type Transformations = {
  restore?: boolean;
  fillBackground?: boolean;
  remove?: {
    prompt: string;
    removeShadow?: boolean;
    multiple?: boolean;
  };
  recolor?: {
    prompt?: string;
    to: string;
    multiple?: boolean;
  };
  removeBackground?: boolean;
};

// ====== TRANSACTION PARAMS
declare type CheckoutTransactionParams = {
  plan: string;
  credits: number;
  amount: number;
  buyerId: string;
};

declare type CreateTransactionParams = {
  stripeId: string;
  amount: number;
  credits: number;
  plan: string;
  buyerId: string;
  createdAt: Date;
};

declare type TransformationTypeKey =
  | "restore"
  | "fill"
  | "remove"
  | "recolor"
  | "removeBackground";

// ====== URL QUERY PARAMS
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type SearchParamProps = {
  params: { id: string; type: TransformationTypeKey };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type TransformationFormProps = {
  action: "Add" | "Update";
  userId: string;
  type: TransformationTypeKey;
  creditBalance: number;
  data?: IImage | null;
  config?: Transformations | null;
};

// Define the type for transformed image data
declare type TransformedImageData = {
  id: string;
  title: string;
  publicId: string;
  transformationType: string;
  width: number;
  height: number;
  secureURL: string;
  transformationURL: string;
  aspectRatio?: string;
  prompt?: string;
  color?: string;
};

// Updated TransformedImageProps without "any" type
declare type TransformedImageProps = {
  image: TransformedImageData;
  type: string;
  title: string;
  transformationConfig: Transformations | null;
  isTransforming: boolean;
  hasDownload?: boolean;
  setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
};

