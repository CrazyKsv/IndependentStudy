# Polynomial Regression

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures

FILE = 'Position_Salaries.csv'
# Importing the dataset
def preprocess(file, x_start, x_end, y_ind):
    
    dataset = pd.read_csv(file)
    X = dataset.iloc[:, x_start:x_end].values
    y = dataset.iloc[:, y_ind].values
    return X, y
    

# Fitting Linear Regression to the dataset
def linear_reg(X,y):
    
    lin_reg = LinearRegression()
    lin_reg.fit(X, y)
    # Visualising the Linear Regression results
    plt.scatter(X, y, color = 'red')
    plt.plot(X, lin_reg.predict(X), color = 'blue')
    plt.title('Truth or Bluff (Linear Regression)')
    plt.xlabel('Position level')
    plt.ylabel('Salary')
    plt.show()
    return lin_reg

# Fitting Polynomial Regression to the dataset
def poly_reg(X, y, degree):
    poly_reg = PolynomialFeatures(degree = degree)
    X_poly = poly_reg.fit_transform(X)
    poly_reg.fit(X_poly, y)
    lin_reg_2 = LinearRegression()
    lin_reg_2.fit(X_poly, y)

    # Visualising the Polynomial Regression results (for higher resolution and smoother curve)
    X_grid = np.arange(min(X), max(X), 0.1)
    X_grid = X_grid.reshape((len(X_grid), 1))
    plt.scatter(X, y, color = 'red')
    plt.plot(X_grid, lin_reg_2.predict(poly_reg.fit_transform(X_grid)), color = 'blue')
    plt.title('Truth or Bluff (Polynomial Regression)')
    plt.xlabel('Position level')
    plt.ylabel('Salary')
    plt.show()
    return lin_reg_2, poly_reg


def do_prediction(xais, regressor, poly_reg=None):
    if poly_reg == None:
        return regressor.predict(xais)
    else:
        return regressor.predict(poly_reg.fit_transform(xais))

if __name__ == '__main__':
    X, y = preprocess(FILE, 1, 2, -1)
    linear = linear_reg(X,y)
    lin_poly, poly_reg = poly_reg(X, y, 4)
    l_predict = do_prediction(6.5, linear)
    p_predict = do_prediction(6.5, lin_poly, poly_reg)
    
    print(l_predict, p_predict)
