import argparse

parser = argparse.ArgumentParser()

parser.add_argument('type', choices=['I', 'N', 'T', 'P'])

args = parser.parse_args()

print(args.type)