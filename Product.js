class Product{
    constructor (name, description, price){
        this.name=name
        this.description=description
        this.price=price
        this.inStock=0

    }
    addToStock(quantidade){
        this.inStock+=quantidade
    }
    calculteDiscount(discountPercentage){
        const discontoTudo = this.price * (discountPercentage/100)
        return this.price - discontoTudo
    }
}
    const pc = new Product("notebook", "notebook da xuxa", "197.00")
    pc.addToStock(10)
    console.log(`nome do produto: ${pc.name}`)
    console.log(`descrição do produto: ${pc.description}`)
    console.log(`valor do produto R$${pc.price}`)
    console.log(`quantidade em estoque: ${pc.inStock}`)
    const desconto = 5
    const newvalue = pc.calculteDiscount(desconto)
    console.log(`desconto do produto: ${desconto}%`)
    console.log(`novo valor do produto: R$${newvalue}`)
