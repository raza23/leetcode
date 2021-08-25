def reverse(x)
   
    if x < 0
      negative = true
    end
  
    x = x.abs
    reversed_integer = 0
  
    while x > 0
      reversed_integer = reversed_integer * 10 + (x % 10)
      x /= 10
        
    end
  
  
      
      if reversed_integer > 2 ** 31
          return 0
      end
  
    negative ? reversed_integer * -1 : reversed_integer
  end