package sd.trabalho.bd;

import java.util.ArrayList;
import java.util.List;
import sd.trabalho.classes.Cliente;
/**
 *
 * @author Vinícius
 */
public class ClienteBD {
    
    public List<Cliente> listar(){
        List<Cliente> lista= new ArrayList<>();
        lista.add(new Cliente(001, "cliente 1"));
        lista.add(new Cliente(002, "Cliente 2"));
        return lista;
        
    }
}
