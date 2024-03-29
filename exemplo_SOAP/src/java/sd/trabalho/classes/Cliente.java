package sd.trabalho.classes;


public class Cliente {
    private Integer codigo;
    private String nome;
    
    public Cliente(){
    }
    
    public Cliente (Integer codigo, String nome){
        this.codigo = codigo;
        this.nome = nome;
        
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Cliente{" + "codigo=" + codigo + ", nome=" + nome + '}';
    }
    
}
