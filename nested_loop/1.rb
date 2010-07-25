sum = 0
100.times do |i|
  10000.times do |j|
    sum += j
    sum = sum % 7123
  end
end
