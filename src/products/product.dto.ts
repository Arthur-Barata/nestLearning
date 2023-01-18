import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsByteLength, IsNotEmpty, IsPositive, IsString, Max, Min, ValidateNested} from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { ImagemProdutoDTO } from "./ImagemProduto.dto";





export class CreateProductDto{
    @IsString()
    @IsNotEmpty()
    nome:string
    @IsPositive()
    @Max(99)
    valor:number;
    @Min(0)
    quantidadeDisponivel:number;
    @IsString()
    @IsNotEmpty()
    @IsByteLength(0,1000)
    descricao:string;

    @ValidateNested()
    @IsArray() 
    @ArrayMinSize(2)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray() 
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[]

    @IsString()
    categoria:string
    @IsString()
    dataCriacao:string
    @IsString()
    dataAtualizacao:string

}