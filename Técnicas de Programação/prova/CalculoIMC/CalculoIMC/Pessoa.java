package CalculoIMC;

class Pessoa {
    private String nome;
    private Float altura;
    private Float peso;

    public Pessoa(String nome, Float altura, Float peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    public boolean calculeIMC() {
        if (altura != null && peso != null) {
            double imc = peso / (altura * altura);
            return imc > 24.9;
        }
        return false;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setAltura(Float altura) {
        this.altura = altura;
    }

    public void setPeso(Float peso) {
        this.peso = peso;
    }

    public String getAll() {
        return "Nome: " + nome + ", \nAltura: " + altura + "m\nPeso: " + peso + "kg\nStatus IMC: " + (calculeIMC() ? "Você está com sobrepso" : "Seu peso está normal");
    }
}