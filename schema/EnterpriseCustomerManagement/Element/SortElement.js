var Modeler = require("../Modeler.js");
var className = 'ElementSortElement';

var ElementSortElement = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SortElement: {
      type: "TypeSortElementType",
      wsdlDefinition: {
        name: "SortElement",
        type: "SortElementType",
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
	  SortElement: {
      type: "TypeSortElementType",
      wsdlDefinition: {
        name: "SortElement",
        type: "SortElementType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSortElement;
Modeler.register(ElementSortElement, "ElementSortElement");
