export const validateProjectContext = (data) => {
  const errors = {};
  if (!data.targetingMarkets) errors.targetingMarkets = "Targeting Markets is required";
  if (!data.countryOfOrigin) errors.countryOfOrigin = "Country of Origin is required";
  return errors;
};

export const validateProductIdentity = (data) => {
  const errors = {};
  if (!data.brandName) errors.brandName = "Brand name is required";
  if (!data.productName) errors.productName = "Product name is required";
  if (!data.productFunction) errors.productFunction = "Product function is required";
  if (!data.productCategory) errors.productCategory = "Product category is required";
  return errors;
};

export const validatePackagingData = (data) => {
  const errors = {};
  if (!data.layers) errors.layers = "Number of pakaging layers is required";
  if (!data.nominalContent) errors.nominalContent = "Nominal content is required";
  return errors;
};


export const validateMarketingClaims = (data) => {
  const errors = {};
  if (!data.functionalClaims) errors.functionalClaims = "At least one functional claim is required";
  return errors;
};

export const validateSupplyChain = (data) => {
  const errors = {};
  if (!data.barcode) errors.barcode = "Barcode is required";
  return errors;
};
