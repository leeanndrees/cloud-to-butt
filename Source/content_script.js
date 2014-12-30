walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bLose Weight\b/g, "Get Pizza");
	v = v.replace(/\bLose weight\b/g, "Get pizza");
	v = v.replace(/\blose weight\b/g, "get pizza");
	v = v.replace(/\bLOSE WEIGHT\b/g, "GET PIZZA");
	
	textNode.nodeValue = v;
}


