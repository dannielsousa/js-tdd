describe('Main', function() {
  
    describe('Method A', function() {
        context('Case 1', function() {
            // é o contexto do caso de teste
            it('shoul happen blablabal', function() {
                //aqui é o que espera
                throw new Error('Just an error');
            })
            it.skip('shoul happen lalala', function() {
                //aqui é o que espera
                throw new Error('Just an error');
            })

        })
        context.only('Case 2', function() {
            // é o contexto do caso de teste
            it('shoul happen blablabal', function() {
                //aqui é o que espera
                throw new Error('Just an error');
            })
        })
    })
    describe('Method B', function() {

        // hookes

        //roda uma vez antes do bloco
        before(function(){})

        //roda uma vez, depois do bloco
        after(function(){})

        //roda todas as vezes, antes de Cada Bloco
        beforeEach(function(){});

        //roda todas as vezes, depois de Cada Bloco
        afterEach(function(){})

    })
})

/*
 npm test -- --bail 
 faz o teste parar no primeiro erro, não prosseguindo
 */ 