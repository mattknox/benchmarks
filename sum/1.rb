startTime = Time.new.to_f

sum = ''
10000.times{|e| sum += e.to_s}

endTime = Time.new.to_f
puts (endTime - startTime).to_s + ' sec'
