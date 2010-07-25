let rec test n acc = if n = 0 then acc else test (n - 1) (acc + n) ;;
test 50000 0 ;;
