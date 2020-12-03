
# Overflow and Underflow
 - This is a form of rounding **error** in numerical computation


## Underflow
- Occurs when numbers near zero are rounded to zero.
- We want to avoid zero-division and some software env will raise exception, others will return `nan` or take log of 0

## Overflow
- A damaging form. Occurs when number with large magnitude ($\infty$ or - $\infty$)

## Softmax function
- Use for against underflow and overflow
- $softmax(\boldsymbol x)_i = \frac{exp(x_i)} {\sum_{j=1}^{n} exp(x_j)}$
    1. If $x_i$ is very negative, then $exp(x_i)$ will **underflow** $\rightarrow$ softmax function will have denominator 0, so final result is `undefined`
    2. If $x_i$ is large and positive, then $exp(x_i)$ will **overflow** $\rightarrow$ the whole expression will be `undefined`
    - Solving 1 and 2 can do $softmax(\boldsymbol z)$ where $\boldsymbol z = \boldsymbol x - max(x_i)$ 
    - Simply algrebra from input vector (add, sub, scalar) will not change the value of softmax function.
    - Subtracting $max(x_i)$ result in largest argument to exp being 0, which rules out the possibility of overflow. Also, at least one term in denominator is 1 which rules out the possibility of underflow.

- $logSoftmax(\boldsymbol x)$ should be implement in another way instead of doing $log(softmax(\boldsymbol x))$ as  $softmax(\boldsymbol x)$ might still be evaulated as 0.


# Poor Condition

## Conditioning
- Refers to how rapidly a function changes wrt. small changes in its inputs.
    - If result changes rapidly when their inputs are slightly changed, then it's problematic because rounding errors in inputs will result in huge difference in results.


# Gradient-Based Optimization
- ***Objective function*** : function that we want to max/min-imized. (Minimized **cost fucntion**, **loss function** and **error function**)
- $x^*$ denoted as the value that minimized or maximized a function. $i.e: x^*=arg \ min \ f(x)$
 