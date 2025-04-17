export class LocalStorage {
    
    constructor() {

    }

    /**
     * Salva o valor booleano `panel_mode` no localStorage.
     * @param {boolean} value - Valor a ser salvo (true/false).
     * @returns {boolean} - `true` se salvou com sucesso, `false` se falhou.
     */
    setPanelMode(value:boolean) {
        try {
            if (typeof value !== 'boolean') {
                throw new Error('O valor deve ser booleano (true/false).');
            }
            localStorage.setItem('panel_mode', String(value));
            return true;
        } catch (error) {
            console.error('Erro ao salvar panel_mode:', error);
            return false;
        }
    }

    /**
     * Obtém o valor booleano `panel_mode` do localStorage.
     * @param {boolean} [defaultValue=false] - Valor padrão se a chave não existir.
     * @returns {boolean} - Valor armazenado ou `defaultValue` em caso de erro.
     */
    getPanelMode(defaultValue = false) {
        try {
            const storedValue = localStorage.getItem('panel_mode');
            // Converte string para booleano
            return storedValue === 'true' ? true :
                storedValue === 'false' ? false :
                    defaultValue;
        } catch (error) {
            console.error('Erro ao ler panel_mode:', error);
            return defaultValue;
        }
    }

    /**
     * Remove a chave `panel_mode` do localStorage.
     * @returns {boolean} - `true` se removeu com sucesso.
     */
    
    /* static */ removePanelMode() {
        try {
            localStorage.removeItem('panel_mode');
            return true;
        } catch (error) {
            console.error('Erro ao remover panel_mode:', error);
            return false;
        }
    }
}