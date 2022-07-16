export class ProductModel {
    constructor(
        public productCode: Number,
        public productName: String,
        public availability: String,
        public price: String,
        public rating: String,
        public imageURL: String
    ) { }
}