'''Sqlite3 data manager.'''

import sqlite3
from sqlite3.dbapi2 import connect
from typing import Iterable
from auth.secrets import DATABASE_PATH

### Database interactions
def get_db_all(query: str, params: Iterable = None):
  '''Gets a list of results from the DB.'''
  try:
    db_connection = connect_db(DATABASE_PATH)
    if params is not None:
      cur = db_connection.execute(query, params)
    else:
      cur = db_connection.execute(query)
    rows = cur.fetchall()
  except sqlite3.OperationalError as exception:
    rows = None
    print('ERROR (get_db_all): Failed to fetch all rows, query = "' + query + '".')
    print(exception)
  return rows

def get_db_one(query: str, params: Iterable = None):
  '''Gets a single result from the DB.'''
  try:
    db_connection = connect_db(DATABASE_PATH)
    if params is not None:
      cur = db_connection.execute(query, params)
    else:
      cur = db_connection.execute(query)
    row = cur.fetchone()
  except sqlite3.OperationalError as exception:
    row = None
    print('ERROR (get_db_one): Failed to fetch row, query = "' + query + '".')
    print(exception)
  return row

def execute(query: str, params: Iterable):
  '''Execute a generic query'''
  result = True
  try:
    db_connection = connect_db(DATABASE_PATH)
    if params is not None:
      db_connection.execute(query, params)
    else:
      db_connection.execute(query)
    db_connection.commit()
  except sqlite3.OperationalError as exception:
    print('ERROR (execute): Failed to execute query = ' + query + ', params = ' + str(params) + '.')
    print(exception)
    result = False
  return result

def delete_id(table: str, id: int):
  '''Delete a table element by id'''
  result = True
  try:
    query = 'DELETE FROM ' + table + ' WHERE id=?'
    db_connection = connect_db(DATABASE_PATH)
    db_connection.execute(query, [id])
    db_connection.commit()
  except sqlite3.OperationalError as exception:
    print('ERROR (delete_id): Failed to delete.')
    print(exception)
    result = False
  return result

def connect_db(path):
  '''Connect to the DB'''
  try:
    engine = sqlite3.connect(path)
    engine.row_factory = dict_factory # sqlite3.Row
  except sqlite3.Error as exception:
    print(exception)
  return engine

def dict_factory(cursor, row):
  '''Cast SQL queries as a python dict object.'''
  data_dict = {}
  for idx, col in enumerate(cursor.description):
    data_dict[col[0]] = row[idx]
  return data_dict
