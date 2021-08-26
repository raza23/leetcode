def is_palindrome(x)
    pal = x 
    n = 0
    while pal > 0 do 
        n = n*10 + (pal%10)
        pal = pal/10
    end
    
    x == n
    
end