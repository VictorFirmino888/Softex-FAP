export class SistemaSeguranca {

    private static instance: SistemaSeguranca | null = null;

    private senha: string;

    private constructor(senha: string) {
        this.senha = senha;
    }

    public static getInstance(senha: string): SistemaSeguranca {
        if (SistemaSeguranca.instance === null) {
            SistemaSeguranca.instance = new SistemaSeguranca(senha);
        }

        return SistemaSeguranca.instance;
    }

    public acessarBaseSecreta(senha: string): boolean {
        return this.senha === senha;
    }
}
