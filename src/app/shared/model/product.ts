
export interface Product {
    _id: string;
    asin: string;
    title: string;
    brand: string;
    manufacturer: string;
    rating: number;
    reviews_count: number;
    final_price: number;
    initial_price: number;
    discount: string;
    availability: string;
    image_url: string;
    images: string[];
    currency: string;
    country_of_origin: string;
    product_dimensions: string;
    item_weight: string;
    description: string;
    features: string[];
    categories: string[];
    is_available: boolean;
    seller_name: string;
    seller_url: string;
    url: string;
    bs_category:string;
}