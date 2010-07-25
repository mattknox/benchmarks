(define (fun n str)
  (if (= n 0)
      str
      (fun (- n 1) (string-append str (number->string n)))))

(fun 50000 "")