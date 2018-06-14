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
        
    dataset = pd.read_csv('Market_Basket_Optimisation.csv', header = None)
    transactions = []
    for i in range(0, len(dataset)):
        transactions.append([str(dataset.values[i,j]) for j in range(0, len(dataset.values[0,:]))])
    
    
    rules = apriori(transactions, min_support = 0.003,
                    min_confidence = 0.2, min_lift = 3, min_length = 2)
    rules = list(rules)
    return rules

# # Visualising the results
if __name__ == '__main__':
    rules = apriori_learning(FILE)
    for i in range(len(rules)):
        print(rules[i].items)