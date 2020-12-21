// This code does not run, but it is type-checked.
import cyrToLatTranslit from '.';

cyrToLatTranslit().transform("привет мир!");
cyrToLatTranslit().transform("привет мир!", "_");
cyrToLatTranslit({ preset: "tj" }).transform("Салом Аҳмад!", "_");
