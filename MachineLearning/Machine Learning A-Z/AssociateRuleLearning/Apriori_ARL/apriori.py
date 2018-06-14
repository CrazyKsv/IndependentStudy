# Apriori

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

from apyori import apriori

FILE = 'Market_Basket_Optimisation.csv'
# Data Preprocessing
def apriori_learning(file):
    ''' (str) -> list
    Given a data file, Learn from the data and output associate relation between items
    '''
    # read the data
    dataset = pd.read_csv(file)

    transactions = []
    for i in range(len(dataset[:,0])):
        transactions.append(str(dataset.values[i,j] for j in range(len(dataset[0,:]))))
    # Training Apriori on the dataset
    rules = apriori(transactions, min_support = 0.003,
                    min_confidence = 0.2, min_lift = 3, min_length = 2)
    rules = list(rule)
    return rules

# dataset = pd.read_csv('Market_Basket_Optimisation.csv', header = None)
# transactions = []
# for i in range(0, 7501):
#     transactions.append([str(dataset.values[i,j]) for j in range(0, 20)])


# # Visualising the results
# results = list(rules)