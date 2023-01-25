package sd.trabalho.rn;

import java.util.List;
import javax.jws.WebService;
import sd.trabalho.bd.ClienteBD;
import sd.trabalho.classes.Cliente;

/**
 *
 * @author Vinícius
 */
@WebService

public class ClienteRN {
    private ClienteBD clienteBD;
    
    public ClienteRN(){
        clienteBD = new ClienteBD();
    }
    
    public List<Cliente> listar(){
        return clienteBD.listar();
    }
}
