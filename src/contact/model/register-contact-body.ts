import { IsNotEmpty, MinLength } from "class-validator";

export class RegisterContactBody {

    @IsNotEmpty({
        message: 'Este campo não pode ser vazio'
    })
    @MinLength(11, {
        message: 'O número precisa possuir DD - E 9 digitos.'
    })
    number: string;

    @IsNotEmpty({
        message: 'O campo de nome não pode ser vazio'
    })
    name: string;

}