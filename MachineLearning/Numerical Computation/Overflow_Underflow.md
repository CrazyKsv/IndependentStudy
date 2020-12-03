# Overflow and Underflow
 - This is a form of rounding **error** in numerical computation


## Underflow
- Occurs when numbers near zero are rounded to zero.
- We want to avoid zero-division and some software env will raise exception, others will return `nan` or take log of 0

## Overflow
- A damaging form. Occurs when number with large magnitude ($\infty$ or - $\infty$)

## Softmax function
- Use for against underflow and overflow
- $softmax(x)_i = \frac{exp(x_i)} {\sum_{j=1}^{n} exp(x_j)}$

