def even?(x)
  if 0 == x
    true
  else
    odd?(x - 1)
  end
end

def odd?(x)
  if 0 == x
    false
  else
    odd?(x - 1)
  end
end
