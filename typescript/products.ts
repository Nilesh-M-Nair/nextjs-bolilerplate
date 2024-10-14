
export type ProductList = Array<Products>

export type Products = {
    categories:string
    created_at:string
    created_by:string
    locale: string
    products: {
        data: Array<Product>
        type: string
    }
    publish_details: {
        time: string
        user: string
        environment: string
        locale: string
    }
    tags: Array<string>
    title: string
    uid: string
    updated_at: string
    updated_by: string
    _in_progress: boolean
    _version: number
  }


export type Product = {
    c_styleNumber?: string
    c_tabDescription?: string
    c_tabDetails?: string
    brand?: string 
    currency: string
    id: string
    imageGroups: Array<ImageGroup>
    inventory: Inventory
    manufacturerName?: string
    longDescription?: string
    master?: Master
    minOrderQuantity: number
    name: string
    pageDescription?: string
    pageKeywords?: string
    pageTitle?: string
    price?: number
    pricePerUnit?: number
    primaryCategoryId: string
    shortDescription?: string
    slugUrl: string
    stepQuantity: number
    type: any
    unitQuantity?: number
    variants: Array<Variant>
    variationAttributes: Array<VariationAttribute>
  }

type ImageGroup =   {
    images: Array<Image>,
    viewType: string
}

type Image = {
    alt: string
    disBaseLink: string
    link: string
    title: string
}

type Inventory = {
    ats: number,
    backorderable: boolean,
    id: string,
    orderable: boolean,
    preorderable: boolean,
    stockLevel: number
}

type Master = {
    masterId: string,
    orderable: boolean,
    price: number
}

type Variant = {
    orderable: boolean,
    price: number,
    productId: string,
    variationValues: {
        accessorySize: string
    }
}

type VariationAttribute = {
    id: string
    name: string
    values: Array<Value>
}

type Value =   {
    name: string,
    orderable: boolean,
    value: number
}