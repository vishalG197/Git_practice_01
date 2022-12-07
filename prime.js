function prime(num){
        let factor=0;
        
        for(let i=2;i<=Math.sqrt(num);i++){
           if(num%i==0){ factor++;
        }}
        if(factor==0){
            return true;
        }else{
            return false;
        }
        return false;
    }
    //console.log(prime(7));