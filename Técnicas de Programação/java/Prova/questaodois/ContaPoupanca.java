import java.util.Date;
import java.util.Calendar;

public class ContaPoupanca extends ContaComum {
    private Date dtAniversario;

    public ContaPoupanca(int numeroConta, String senha, Date dtAniversario) {
        super(numeroConta, senha);
        this.dtAniversario = dtAniversario;
    }

    public void aplicarJurosMensais() {
        Calendar hoje = Calendar.getInstance();
        Calendar aniversario = Calendar.getInstance();
        aniversario.setTime(dtAniversario);
        if (hoje.get(Calendar.DAY_OF_MONTH) == aniversario.get(Calendar.DAY_OF_MONTH)) {
            setSaldo(getSaldo() + getSaldo() * 0.01);
            System.out.println("Juros de 1% aplicados. Saldo atual: R$" + getSaldo());
        }
    }

    public Date getDtAniversario() {
        return dtAniversario;
    }

    public void setDtAniversario(Date dtAniversario) {
        this.dtAniversario = dtAniversario;
    }
}
