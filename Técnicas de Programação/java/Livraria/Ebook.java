package Livraria;

public class Ebook extends Livro{
	private String waterMark;
	
	public Ebook(Autor autor) {
		super(autor);
	}
	
	public void setWaterMark(String waterMark) {
		this.waterMark = waterMark;
	}
	
	public String getWaterMark() {
		return waterMark;
	}

	@Override
	public boolean aplicaDescontoDe(double porcentagem) { 
		if (porcentagem > 0.15) {
			return false;
		}
		this.setValor(this.getValor() - porcentagem);
		return true;
	}
}
