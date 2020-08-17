var Modeler = require("../Modeler.js");
var className = 'ElementSortCriteria';

var ElementSortCriteria = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SortCriteria: {
      type: "TypeSortCriteriaType",
      wsdlDefinition: {
        name: "SortCriteria",
        type: "SortCriteriaType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  SortCriteria: {
      type: "TypeSortCriteriaType",
      wsdlDefinition: {
        name: "SortCriteria",
        type: "SortCriteriaType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSortCriteria;
Modeler.register(ElementSortCriteria, "ElementSortCriteria");
