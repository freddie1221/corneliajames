export const PRODUCTS_QUERY = `

{
  products(
      first: 200, 
      sortKey: PRODUCT_TYPE, 
      reverse: false, 
      query: "status:ACTIVE"
    ) {
    edges {
      node {
        id
        title
        productType
        handle
        status
        tags
        onlineStoreUrl
        collections(first: 1) {
          nodes {
            title
          }
        }
        featuredImage {
          url
        }
        length: metafield(key: "length", namespace: "my_fields") {
          value
        }
        features: metafield(key: "product_features", namespace: "custom") {
          value
        }
        material: metafield(key: "material", namespace: "custom") {
          reference {
            ... on Metaobject {
              composition: field(key: "composition") {
                value
              }
              care: field(key: "care_summary") {
                value
              }
            }
          }
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        options {
          optionValues {
            name
          }
        }
        variants (first: 250) {
          nodes {
            sku
            selectedOptions {
              name
              value
            }
            image {
              url
            }
          }
        }
      }
    }
  }
}`;