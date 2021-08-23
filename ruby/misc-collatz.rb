
def collatz(n)
  
  
    nums = [n]
    
    
    
    while n > 1 do
        if n%2 == 1
      
          n = (3*n) + 1
          nums << n
      
    
        else
          n = n/2
          nums << n
        
      
      end
    end
    return nums
   end
  
  
  collatz(20)