# Random Forest Regression

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.ensemble import RandomForestRegressor

FILE = 'Position_Salaries.csv'


def preprocess(file, x_start, x_end, y_ind):
    
    dataset = pd.read_csv(file)
    X = dataset.iloc[:, x_start:x_end].values
    y = dataset.iloc[:, y_ind].values

    return X, y


def regression(regressor, X, y):
    regressor.fit(X, y)
    # Visualising the Random Forest Regression results (higher resolution)
    X_grid = np.arange(min(X), max(X), 0.001)
    X_grid = X_grid.reshape((len(X_grid), 1))
    plt.scatter(X, y, color = 'red')
    plt.plot(X_grid, regressor.predict(X_grid), color = 'blue')
    plt.title('Truth or Bluff (Random Forest Regression)')
    plt.xlabel('Position level')
    plt.ylabel('Salary')
    plt.show()


def create_randomForest_regressor(estimator):
    return RandomForestRegressor(n_estimators = estimator, random_state=0)


def do_predict(regressor, predict_value):
    result = regressor.predict(predict_value)
    return result


if __name__ == '__main__':
    X, y = preprocess(FILE, 1, 2, -1)
    # estimator needs to change based on the data set for efficiency
    regressor = create_randomForest_regressor(15)
    regression(regressor, X, y)
    print(do_predict(regressor, 6.5))



