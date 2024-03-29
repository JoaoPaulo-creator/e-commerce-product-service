import { Request, Response } from "express"
import ProductRepository from "../../repository/product/ProductRepository"

export default new class ListProductController {

  async show(request: Request, respose: Response){
    const id: string = request.params.id
    const product = await ProductRepository.findById(id)

    if(!product){
      return respose.status(404).json({ message: 'Product not found'})
    }

    return respose.status(200).json(product)
  }
}