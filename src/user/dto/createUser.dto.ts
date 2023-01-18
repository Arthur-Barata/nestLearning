import { IsString,IsNotEmpty,IsEmail,MinLength } from "class-validator"

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    nome:string
    @IsEmail()
    email:string
    @MinLength(8)
    senha:string
}