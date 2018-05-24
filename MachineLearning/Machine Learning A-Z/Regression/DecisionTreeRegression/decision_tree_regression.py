# Decision Tree Regression

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.tree import DecisionTreeRegressor

FILE = 'Position_Salaries.csv'

def preprocess(file, x_start, x_end, y_ind):
    
    dataset = pd.read_csv(file)
    X = dataset.iloc[:, x_start:x_end].values
    y = dataset.iloc[:, y_ind].values

    return X, y

def desicionTreeRegression(regressor, X, y):
    regressor.fit(X, y)
    X_grid = np.arange(min(X), max(X), 0.01)
    X_grid = X_grid.reshape((len(X_grid), 1))
    plt.scatter(X, y, color = 'red')
    plt.plot(X_grid, regressor.predict(X_grid), color = 'blue')
    plt.title('Truth or Bluff (Decision Tree Regression)')
    plt.xlabel('Position level')
    plt.ylabel('Salary')
    plt.show()


def do_predict(regressor, predict_value):
    result = regressor.predict(predict_value)
    return result



if __name__ == '__main__':
    X, y = preprocess(FILE, 1, 2, -1)
    
    # Fitting Decision Tree Regression to the dataset
    regressor = DecisionTreeRegressor(random_state = 0)
    desicionTreeRegression(regressor, X, y)
    print(do_predict(regressor, 6.5))
    